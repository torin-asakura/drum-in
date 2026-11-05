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
