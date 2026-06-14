import { SITE_NAME } from '../config/site'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4 text-sm text-brand-muted">
      <h1 className="text-2xl text-brand-bright">Privacy Policy</h1>
      <p>
        {SITE_NAME} does not collect, store, or transmit any personal data. There is no account
        system and no analytics or tracking built into the tool itself.
      </p>
      <h2 className="text-lg text-brand-text pt-2">Your data</h2>
      <p>
        The channel lists you create are stored only in your own browser’s local storage on your
        device. They are never uploaded to a server. Exporting your data downloads a file locally;
        importing reads a file you choose. Clearing your browser’s site data removes everything.
      </p>
      <h2 className="text-lg text-brand-text pt-2">Embedded content</h2>
      <p>
        When you choose to preview a stream or open a channel, content is loaded directly from
        YouTube or Twitch. Those services may set their own cookies and collect data according to
        their own privacy policies, which are outside the control of {SITE_NAME}.
      </p>
      <h2 className="text-lg text-brand-text pt-2">Changes</h2>
      <p>
        If analytics or advertising are ever added, this policy will be updated to describe them
        before they take effect.
      </p>
    </div>
  )
}
