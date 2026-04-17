# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [1.0.1]

### Changed

* Updated @flotiq/nextjs-live-preview from ^0.6.2 to ^0.8.0-alpha.2 to validate compatibility with the new collaboration server.
* Migrated live preview bindings on content pages and footer components to the newer data={...} integration expected by the updated Flotiq live preview package.

### Fixed

* Corrected the contact page live preview mapping for the email field so email content is previewed and edited against the proper field instead of the phone field.

## [1.0.0]
### Added
* Init demo portfolio app