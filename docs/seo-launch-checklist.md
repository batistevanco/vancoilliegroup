# SEO launch checklist — vancoilliegroup.be

The application is configured for `https://vancoilliegroup.be`. Complete these account-level steps immediately after deployment; they cannot be done from the source code alone.

## 1. Deploy and verify the domain

- Point the production domain to the hosting provider and force HTTPS.
- Confirm that `https://vancoilliegroup.be/robots.txt` and `https://vancoilliegroup.be/sitemap.xml` return HTTP 200.
- Confirm that `/nl` and `/en` are both publicly accessible.

## 2. Google Search Console

- Create a Domain property for `vancoilliegroup.be` and verify it through DNS.
- Optionally set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the supplied HTML-tag token and redeploy.
- Submit `https://vancoilliegroup.be/sitemap.xml`.
- Use URL Inspection to request indexing for `/nl` and the six `/nl/expertise/*` pages.

## 3. Bing Webmaster Tools

- Import the Search Console property or add the domain manually.
- Optionally set `NEXT_PUBLIC_BING_SITE_VERIFICATION` to the supplied `msvalidate.01` token and redeploy.
- Submit the sitemap.

## 4. Contact form delivery

- Create a secure email or CRM webhook endpoint.
- Add it as the server-only `CONTACT_FORM_ENDPOINT` environment variable.
- Submit a test enquiry in production and confirm delivery before promoting the form.

## 5. Analytics and consent

- Create a Google Analytics 4 property only if analytics is needed.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in production.
- Verify that no analytics request is sent before the visitor accepts the consent banner.
- Have the privacy text reviewed before activating tracking.

## 6. Local SEO and authority

- Claim and complete the Google Business Profile with the verified business name, address, phone number, website and categories.
- Keep the same company details on the website, Google Business Profile and reputable directories.
- Publish real case studies, client testimonials (with consent) and useful articles regularly.
- Earn relevant editorial links; never buy spam links or use automated link schemes.

## 7. Performance monitoring

- Run PageSpeed Insights for mobile and desktop after every major release.
- Track Core Web Vitals in Search Console: LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1 at the 75th percentile.
- Keep source images compressed and use `next/image` for visible imagery.

## 8. Legal review

- Have the privacy policy and terms reviewed with the legal business identity, VAT number, registered address, data processors, retention periods and contact details.
- Update the policy when the contact endpoint, analytics, cookies or any other processor changes.
