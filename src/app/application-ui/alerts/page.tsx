import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { AlertCustom } from "@/components/application-ui/alerts/AlertCustom"

export default function Alerts() {
  const base = "application-ui/alerts"

  return (
    <ComponentTypePage
      title="Alerts"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Customizable alerts to send information to the user with different icons, colors, and actions. Click the{" "}
          <strong className="underline decoration-primary-500">code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        {
          name: "With Accent and Dismissible",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <AlertCustom type="info" accent dismissible>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" accent dismissible>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" accent dismissible>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" accent dismissible>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom accent dismissible>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>
            </div>
          ),
        },
        {
          name: "Rounded with Border",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <AlertCustom type="info" rounded border>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" rounded border>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" rounded border>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" rounded border>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom rounded border>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>
            </div>
          ),
        },
        {
          name: "Filled, Rounded and dismissible",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <AlertCustom type="info" filled rounded dismissible>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" filled rounded dismissible>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" filled rounded dismissible>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" filled rounded dismissible>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom filled rounded dismissible>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>
            </div>
          ),
        },
        {
          name: "Accent, dismissible with Long Children",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <AlertCustom type="info" accent dismissible>
                  <p>
                    Content of your <strong>information alert</strong> provided through children.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="success" accent dismissible>
                  <p>
                    Content of your <strong>success alert</strong> provided through children.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="warning" accent dismissible>
                  <p>
                    Content of your <strong>warning alert</strong> provided through children.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="error" accent dismissible>
                  <p>
                    Content of your <strong>error alert</strong> provided through children.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom accent dismissible>
                  <p>
                    Content of your <strong>general alert</strong> provided through children.
                  </p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
              </div>
            </div>
          ),
        },
        {
          name: "Accent and no Icon",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <AlertCustom type="info" accent noIcon>
                  Content of your <strong>information alert</strong> provided through children.
                </AlertCustom>
                <AlertCustom type="success" accent noIcon>
                  Content of your <strong>success alert</strong> provided through children.
                </AlertCustom>
                <AlertCustom type="warning" accent noIcon>
                  Content of your <strong>warning alert</strong> provided through children.
                </AlertCustom>
                <AlertCustom type="error" accent noIcon>
                  Content of your <strong>error alert</strong> provided through children.
                </AlertCustom>
                <AlertCustom accent noIcon>
                  Content of your <strong>general alert</strong> provided through children.
                </AlertCustom>
              </div>
            </div>
          ),
        },
      ]}
    />
  )
}
