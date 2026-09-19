import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { NotFound } from "@/components/not-found";
import appCss from "../styles.css?url";

const APP_NAME = "Brook of Destiny Foundation";

export const Route = createRootRoute({
  notFoundComponent: NotFound,

  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title: APP_NAME,
      },

      {
        name: "description",
        content:
          "Brook of Destiny Foundation is a Christian non-profit organization based in Webuye East, Bungoma County, Kenya, committed to nurturing God-given potential, strengthening vulnerable families, and transforming communities through practical Christian service.",
      },

      {
        name: "theme-color",
        content: "#0E3B2E",
      },

      {
        name: "robots",
        content: "index, follow",
      },

      {
        property: "og:title",
        content: APP_NAME,
      },

      {
        property: "og:description",
        content:
          "A Christian non-profit organization based in Webuye East, Bungoma County, Kenya. Nurturing destinies, strengthening families, and transforming communities through practical Christian service.",
      },

      {
        property: "og:image",
        content: "https://brookofdestinyfoundation.com/og.jpg",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://brookofdestinyfoundation.com",
      },

      {
        property: "og:site_name",
        content: APP_NAME,
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: APP_NAME,
      },

      {
        name: "twitter:description",
        content:
          "A Christian non-profit organization based in Webuye East, Bungoma County, Kenya, nurturing destinies and transforming communities.",
      },

      {
        name: "twitter:image",
        content: "https://brookofdestinyfoundation.com/og.jpg",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32.png",
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16.png",
      },

      {
        rel: "icon",
        href: "/favicon.ico",
      },

      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },

      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "manifest",
        href: "/__grok/manifest.webmanifest",
      },

      {
        rel: "apple-touch-icon",
        href: "/__grok/icon-180.png",
      },
    ],
  }),

  component: () => (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>

      <body className="bg-paper text-ink">
        <PreviewHostBridge />

        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>

        <Scripts />
      </body>
    </html>
  ),
});
