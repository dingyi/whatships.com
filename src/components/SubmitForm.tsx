import { Check, Copy, ExternalLink } from "lucide-react";
import {
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { CATEGORIES } from "@/lib/catalog";
import {
  buildCatalogDraft,
  buildGitHubIssueUrl,
  emptySubmission,
  hasSubmissionErrors,
  parseSubmitKind,
  submitKindCopy,
  SUBMIT_KINDS,
  validateSubmission,
  type CatalogSubmission,
  type SubmitKind,
} from "@/lib/submit";
import { TOOL_CATEGORIES } from "@/lib/tools";
import { shakeInput, swapText } from "@/lib/motion";

type Step = "form" | "ready";

function syncKindInUrl(kind: SubmitKind) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (kind === "video") url.searchParams.delete("kind");
  else url.searchParams.set("kind", kind);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function Field({
  label,
  hint,
  error,
  touched,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  touched: boolean;
  children: ReactNode;
}) {
  const invalid = touched && Boolean(error);
  const errorId = `submit-error-${label.toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, "-")}`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-describedby"?: string }>, {
        "aria-describedby": invalid ? errorId : undefined,
      })
    : children;
  return (
    <label className={`submit-field t-input-wrap${invalid ? " is-error" : ""}`}>
      <span>
        {label}
        {hint ? (
          <>
            {" "}
            <small>{hint}</small>
          </>
        ) : null}
      </span>
      {control}
      {invalid ? (
        <em id={errorId} className="submit-error t-error-msg">
          {error}
        </em>
      ) : null}
    </label>
  );
}

export default function SubmitForm() {
  const [form, setForm] = useState<CatalogSubmission>(() => emptySubmission());
  const [errors, setErrors] = useState(() =>
    validateSubmission(emptySubmission()),
  );
  const [touched, setTouched] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [copied, setCopied] = useState(false);
  const [issueUrl, setIssueUrl] = useState("");
  const copyLabelRef = useRef<HTMLSpanElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const draft = useMemo(() => buildCatalogDraft(form), [form]);
  const draftJson = draft ? JSON.stringify(draft, null, 2) : "";
  const copy = submitKindCopy(form.kind);

  function update<K extends keyof CatalogSubmission>(
    key: K,
    value: CatalogSubmission[K],
  ) {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (touched) setErrors(validateSubmission(next));
      return next;
    });
  }

  function setKind(kind: SubmitKind) {
    setForm((current) => {
      const next = { ...current, kind };
      setErrors(validateSubmission(next));
      return next;
    });
    setTouched(false);
    syncKindInUrl(kind);
  }

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setTouched(true);
    const nextErrors = validateSubmission(form);
    setErrors(nextErrors);
    if (hasSubmissionErrors(nextErrors)) {
      window.requestAnimationFrame(() => {
        const root = formRef.current;
        if (!root) return;
        root
          .querySelectorAll<HTMLElement>(".t-input.is-error")
          .forEach((el) => shakeInput(el));
        root
          .querySelector<HTMLElement>('[aria-invalid="true"], .t-input.is-error')
          ?.focus();
      });
      return;
    }

    const url = buildGitHubIssueUrl(form);
    setIssueUrl(url);
    setStep("ready");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  useEffect(() => {
    const kind = parseSubmitKind(
      new URLSearchParams(window.location.search).get("kind"),
    );
    if (kind === "video") return;
    const next = emptySubmission(kind);
    setForm(next);
    setErrors(validateSubmission(next));
  }, []);

  useEffect(() => {
    if (copyLabelRef.current) {
      swapText(copyLabelRef.current, copied ? "Copied" : "Copy JSON");
    }
  }, [copied]);

  async function copyDraft() {
    if (!draftJson) return;
    try {
      await navigator.clipboard.writeText(draftJson);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  if (step === "ready") {
    return (
      <div className="submit-success">
        <h1>Open a GitHub issue to finish</h1>
        <p className="submit-lead">{copy.success}</p>
        <div className="submit-success__actions">
          <a className="nav-submit submit-primary-link" href={issueUrl}>
            Open GitHub issue
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="submit-secondary"
            onClick={() => {
              const next = emptySubmission(form.kind);
              setStep("form");
              setTouched(false);
              setErrors(validateSubmission(next));
              setForm(next);
              setIssueUrl("");
            }}
          >
            Submit another
          </button>
        </div>
        {draftJson && (
          <div className="submit-draft">
            <div className="submit-draft__header">
              <h2>Suggested catalog draft</h2>
              <button type="button" className="submit-copy" onClick={copyDraft}>
                <span
                  className="t-icon-swap"
                  data-state={copied ? "b" : "a"}
                  aria-hidden="true"
                >
                  <span className="t-icon" data-icon="a">
                    <Copy size={14} />
                  </span>
                  <span className="t-icon" data-icon="b">
                    <Check size={14} />
                  </span>
                </span>
                <span className="t-text-swap" ref={copyLabelRef}>
                  Copy JSON
                </span>
              </button>
            </div>
            <pre>{draftJson}</pre>
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="submit-form" onSubmit={onSubmit} noValidate ref={formRef}>
      <div className="submit-intro">
        <h1>{copy.heading}</h1>
        <p className="submit-lead">{copy.lead}</p>
      </div>

      <fieldset className="submit-fieldset">
        <legend>Type</legend>
        <div className="submit-kinds">
          {SUBMIT_KINDS.map((item) => (
            <label className="submit-kind" htmlFor={`submit-kind-${item.id}`} key={item.id}>
              <input
                className="submit-kind-input"
                type="radio"
                name="submit-kind"
                id={`submit-kind-${item.id}`}
                value={item.id}
                checked={form.kind === item.id}
                onChange={() => setKind(item.id)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      {form.kind === "video" ? (
        <>
          <fieldset className="submit-fieldset">
            <legend>Source post</legend>
            <Field label="X / Twitter post URL" error={errors.tweetUrl} touched={touched}>
              <Input
                className={`t-input${touched && errors.tweetUrl ? " is-error" : ""}`}
                type="url"
                name="tweetUrl"
                inputMode="url"
                autoComplete="url"
                placeholder="https://x.com/handle/status/123…"
                value={form.tweetUrl}
                aria-invalid={touched && Boolean(errors.tweetUrl)}
                onChange={(event) => update("tweetUrl", event.target.value)}
                required
              />
            </Field>
          </fieldset>

          <fieldset className="submit-fieldset">
            <legend>Product</legend>
            <div className="submit-grid">
              <Field label="Product name" error={errors.product} touched={touched}>
                <Input
                  className={`t-input${touched && errors.product ? " is-error" : ""}`}
                  name="product"
                  placeholder="Linear Loops"
                  value={form.product}
                  aria-invalid={touched && Boolean(errors.product)}
                  onChange={(event) => update("product", event.target.value)}
                  required
                />
              </Field>
              <Field
                label="Company / publisher"
                error={errors.company}
                touched={touched}
              >
                <Input
                  className={`t-input${touched && errors.company ? " is-error" : ""}`}
                  name="company"
                  placeholder="Linear"
                  value={form.company}
                  aria-invalid={touched && Boolean(errors.company)}
                  onChange={(event) => update("company", event.target.value)}
                  required
                />
              </Field>
            </div>

            <Field label="Category" error={errors.videoCategory} touched={touched}>
              <Select
                value={form.videoCategory || ""}
                onValueChange={(value) =>
                  update("videoCategory", (value || "") as CatalogSubmission["videoCategory"])
                }
              >
                <SelectTrigger
                  className={`submit-select t-input${touched && errors.videoCategory ? " is-error" : ""}`}
                  aria-label="Category"
                  aria-invalid={touched && Boolean(errors.videoCategory)}
                  placeholder="Select a category"
                />
                <SelectContent>
                  {CATEGORIES.map((item, index) => (
                    <SelectItem key={item.id} index={index} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Title" hint="optional" error={errors.title} touched={touched}>
              <Input
                name="title"
                placeholder="Linear Loops — recurring agent workflows"
                value={form.title}
                aria-invalid={touched && Boolean(errors.title)}
                onChange={(event) => update("title", event.target.value)}
              />
            </Field>

            <Field
              label="Description"
              hint="optional"
              error={errors.description}
              touched={touched}
            >
              <textarea
                className="submit-textarea"
                name="description"
                rows={4}
                placeholder="What does the launch video show?"
                value={form.description}
                aria-invalid={touched && Boolean(errors.description)}
                onChange={(event) => update("description", event.target.value)}
              />
            </Field>
          </fieldset>
        </>
      ) : null}

      {form.kind === "tool" ? (
        <fieldset className="submit-fieldset">
          <legend>Listing</legend>
          <div className="submit-grid">
            <Field label="Name" error={errors.name} touched={touched}>
              <Input
                className={`t-input${touched && errors.name ? " is-error" : ""}`}
                name="name"
                placeholder="Osmo"
                value={form.name}
                aria-invalid={touched && Boolean(errors.name)}
                onChange={(event) => update("name", event.target.value)}
                required
              />
            </Field>
            <Field label="Website URL" error={errors.url} touched={touched}>
              <Input
                className={`t-input${touched && errors.url ? " is-error" : ""}`}
                type="url"
                name="url"
                inputMode="url"
                autoComplete="url"
                placeholder="https://osmo.inc/"
                value={form.url}
                aria-invalid={touched && Boolean(errors.url)}
                onChange={(event) => update("url", event.target.value)}
                required
              />
            </Field>
          </div>

          <Field label="Category" error={errors.toolCategory} touched={touched}>
            <Select
              value={form.toolCategory || ""}
              onValueChange={(value) =>
                update("toolCategory", (value || "") as CatalogSubmission["toolCategory"])
              }
            >
              <SelectTrigger
                className={`submit-select t-input${touched && errors.toolCategory ? " is-error" : ""}`}
                aria-label="Category"
                aria-invalid={touched && Boolean(errors.toolCategory)}
                placeholder="Select a category"
              />
              <SelectContent>
                {TOOL_CATEGORIES.map((item, index) => (
                  <SelectItem key={item.id} index={index} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tagline" hint="optional" error={errors.tagline} touched={touched}>
            <Input
              name="tagline"
              placeholder="Make stories that move"
              value={form.tagline}
              aria-invalid={touched && Boolean(errors.tagline)}
              onChange={(event) => update("tagline", event.target.value)}
            />
          </Field>

          <Field
            label="Description"
            hint="optional"
            error={errors.description}
            touched={touched}
          >
            <textarea
              className="submit-textarea"
              name="description"
              rows={4}
              placeholder="What does this tool make?"
              value={form.description}
              aria-invalid={touched && Boolean(errors.description)}
              onChange={(event) => update("description", event.target.value)}
            />
          </Field>

          {form.toolCategory === "skills" ? (
            <Field
              label="Install command"
              hint="optional"
              error={errors.install}
              touched={touched}
            >
              <Input
                name="install"
                placeholder="npx skills add owner/repo"
                value={form.install}
                aria-invalid={touched && Boolean(errors.install)}
                onChange={(event) => update("install", event.target.value)}
              />
            </Field>
          ) : null}
        </fieldset>
      ) : null}

      {form.kind === "studio" || form.kind === "designer" ? (
        <fieldset className="submit-fieldset">
          <legend>Listing</legend>
          <div className="submit-grid">
            <Field
              label="Name"
              error={errors.name}
              touched={touched}
            >
              <Input
                className={`t-input${touched && errors.name ? " is-error" : ""}`}
                name="name"
                placeholder={form.kind === "studio" ? "Pixel Frame" : "Mouad"}
                value={form.name}
                aria-invalid={touched && Boolean(errors.name)}
                onChange={(event) => update("name", event.target.value)}
                required
              />
            </Field>
            <Field label="Website URL" error={errors.url} touched={touched}>
              <Input
                className={`t-input${touched && errors.url ? " is-error" : ""}`}
                type="url"
                name="url"
                inputMode="url"
                autoComplete="url"
                placeholder={
                  form.kind === "studio"
                    ? "https://www.pixelframe.co/"
                    : "https://mouad.work/"
                }
                value={form.url}
                aria-invalid={touched && Boolean(errors.url)}
                onChange={(event) => update("url", event.target.value)}
                required
              />
            </Field>
          </div>

          <Field
            label="X handle"
            hint="optional"
            error={errors.xHandle}
            touched={touched}
          >
            <Input
              name="xHandle"
              placeholder={form.kind === "studio" ? "Varcyyyy" : "M7Vedits"}
              value={form.xHandle}
              aria-invalid={touched && Boolean(errors.xHandle)}
              onChange={(event) => update("xHandle", event.target.value)}
            />
          </Field>

          <Field label="Tagline" hint="optional" error={errors.tagline} touched={touched}>
            <Input
              name="tagline"
              placeholder={
                form.kind === "studio"
                  ? "Motion studio for Web3 and SaaS"
                  : "Motion & animation for AI startups"
              }
              value={form.tagline}
              aria-invalid={touched && Boolean(errors.tagline)}
              onChange={(event) => update("tagline", event.target.value)}
            />
          </Field>

          <Field
            label="Description"
            hint="optional"
            error={errors.description}
            touched={touched}
          >
            <textarea
              className="submit-textarea"
              name="description"
              rows={4}
              placeholder={
                form.kind === "studio"
                  ? "What kind of launch films does this studio make?"
                  : "What kind of launch films does this designer make?"
              }
              value={form.description}
              aria-invalid={touched && Boolean(errors.description)}
              onChange={(event) => update("description", event.target.value)}
            />
          </Field>
        </fieldset>
      ) : null}

      <div className="submit-actions">
        <Button type="submit" className="submit-button" size="lg">
          Continue to GitHub
        </Button>
        <p className="submit-footnote">
          Opens a prefilled GitHub issue on{" "}
          <a
            href="https://github.com/dingyi/whatships.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dingyi/whatships.com
          </a>
          . Nothing is stored on this site.
        </p>
      </div>
    </form>
  );
}
