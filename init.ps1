dotnet new console --language "F#" --name "App" --framework "net8.0" --output src
dotnet new globaljson --sdk-version "8.0.100" --roll-forward latestFeature
dotnet new nugetconfig
dotnet new tool-manifest
dotnet tool install fable
dotnet tool install fantomas
dotnet add .\src\App.fsproj package Fable.Core
dotnet add .\src\App.fsproj package Fable.Browser.Dom
dotnet new xunit --language "F#" --framework "net8.0" --output tests
dotnet add .\tests\tests.fsproj reference .\src\App.fsproj
# Save workspace.
# Setup formatting.
# Edit `.gitignore`
#     Add Fable gererated files.
npm init -y
# Edit package.json
#     Add scripts.
#     Set author and license.
#     Add `"private": true`.
npm install --save-dev vite
New-Item -Name vite.config.ts -ItemType File
# Edit vite.config.ts
#     Add `base: '/<REPO>/'`
#     Add `build` options.
#     Add `server.port` option.
New-Item -Name index.html -ItemType File
New-Item -Name style.css -ItemType File
New-Item -Name image -ItemType Directory
# `dotnet fable` after cd .\src\
# Edit index.html
# npm run build #at root, for `dotnet fable .\src\App.fsproj --run npx vite build`