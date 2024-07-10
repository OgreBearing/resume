{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.openssl.dev
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "Prisma.prisma"
    "eamodio.gitlens"
    "1YiB.svelte-bundle"
    "bradlc.vscode-tailwindcss"
    "austenc.tailwind-docs"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}