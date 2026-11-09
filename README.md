# drum-in

[//]: # 'VERSIONS'

[<img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls%2Fcode-service&message=0.0.16&labelColor=ECEEF5&color=D7DCEB">](https://npmjs.com/package/@atls/code-service) [<img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls%2Fschematics&message=0.0.12&labelColor=ECEEF5&color=D7DCEB">](https://npmjs.com/package/@atls/schematics)

[//]: # 'VERSIONS'

Drum Instructor

## Container publication

The Release workflow publishes through the existing Yarn `image pack` command
to GHCR with the `drum-instructor-` image prefix and `hash-timestamp` tag policy.
Authentication uses the repository `GITHUB_TOKEN` with Packages write access;
Yandex registry credentials are not used.

Merged pull requests retain changed-workspace publication. A manual Release
dispatch on `master` publishes `@landing/renderer-entrypoint`, including when
only release configuration has changed. Existing package access controls apply
to pulls.

## Production delivery

The ARM64 workflow builds `@landing/renderer-entrypoint` with the maintained
ATLS Node 24 builder and Yarn workspace buildpack. Pull requests build locally
on the hosted ARM64 runner; accepted master revisions publish to GHCR with
an immutable commit tag and the `arm64` channel tag.

The Node 24 build retains Yarn Plug'n'Play and disables its old experimental
ESM loader through the native build-only `YARN_PNP_ENABLE_ESM_LOADER` setting.
Existing Node 18 checks retain their setup. Deploy the standalone server
directly with Node from the renderer workspace, preloading `/workspace/.pnp.cjs`
with Node's native `--require` option so production dependencies remain available.

The browser uses `https://wp.druminstructor.online/graphql`. Server-side builds
may set `WORDPRESS_GRAPHQL_URL`; it is not a browser configuration variable.
Before domain delegation the workflow can read the existing WordPress server
through a read-only build-container hosts mount, preserving HTTPS certificate
verification. This mount is not part of the resulting image. Once the new
WordPress hostname is available, builds select it without the legacy mapping.

The workflow verifies real homepage content before building. Successful image
publication does not prove the new WordPress hostname, media URLs, forms,
DNS, or public TLS are ready; those remain deployment acceptance checks.

The standalone package includes its public assets. Image acceptance verifies
the real homepage and byte-for-byte public PNG delivery.

Configure `REVALIDATE_DATA_TOKEN` only at runtime through the infrastructure's
Bao delivery. No live token belongs in this repository or the image. Without
the variable the explicit revalidation endpoint returns 401, while ordinary
page delivery and scheduled ISR remain available. The empty .env.example is
only a field reference; a local .env.local is ignored.

Send the configured token in the Authorization Bearer header, not in the URL.
The existing query parameter remains compatible with prior callers. Image
acceptance uses an unrelated synthetic token to test refusal and successful
revalidation against real CMS data with a writable Next cache and a read-only
root filesystem. Production credentials are never passed to CI acceptance.
