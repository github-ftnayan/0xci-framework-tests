import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "0xCI Remix v2 Test" },
    { name: "description", content: "Classic Remix v2 app for 0xCI deploy detection test" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>0xCI Remix v2 Deploy Test</h1>
      <p>
        This is a minimal classic Remix v2 application used to verify that
        0xCI correctly auto-detects Remix v2 (via @remix-run/dev /
        @remix-run/react) and provisions sst.aws.Remix, as opposed to React
        Router v7.
      </p>
    </div>
  );
}
