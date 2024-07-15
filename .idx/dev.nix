{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages_latest.vercel
    pkgs.openssl.dev
  ];
  idx = {
    extensions = [
      "svelte.svelte-vscode"
      "Prisma.prisma"
      "eamodio.gitlens"
      "1YiB.svelte-bundle"
      "bradlc.vscode-tailwindcss"
      "austenc.tailwind-docs"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"];
          manager = "web";
        };
      };
    };
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
  };
}