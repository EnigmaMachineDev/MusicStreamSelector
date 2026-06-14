import { ORG_NAME, SITE_NAME } from '../config/site'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4 text-sm text-brand-muted">
      <h1 className="text-2xl text-brand-bright">Contact</h1>
      <p>
        {SITE_NAME} is built and maintained by{' '}
        <strong className="text-brand-text">{ORG_NAME}</strong>.
      </p>
      <p>
        Found a bug, a URL format that isn’t recognized, or have a feature idea? Reach out to{' '}
        {ORG_NAME} and include the channel URL you were trying to add so it can be reproduced.
      </p>
    </div>
  )
}
