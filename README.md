# Use Nextjs with Yarn 4.x

First of all, I have been researching how package managers work, specifically Yarn.  I found that I was using an outdated version of yarn (v1.22.19). Configuring yarn berry (v4.0.0) was a challenging task due to the lack of information and complex documentation. After understanding the issue, a new problem appeared, and now I'm analizing if I should keep using yarn or **jump to pnpm ...**

## Instructions to use this

```bash
  # first step
  git clone https://github.com/3st1v3ntOkay/test-zone-nextjs.git
```

```bash
  # second step
  corepack enable

  # third step
  yarn set version berry

  # last step - yarn and yarn install are the same
  yarn
  yarn install
```

Yarn docs:
👉🏻 [Installation](https://yarnpkg.com/getting-started/install)
