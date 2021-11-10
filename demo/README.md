## Nx workspace + Angular + Storybook

To do:

(Add description)

### Steps to run locally

1. Clone the repo

2. From inside of the project directory, run `npm i` to install dependencies

3. Install Nx globally with `npm i -g nx`

4. Go to [thedogapi.com/signup](https://thedogapi.com/signup) and register for an API key.

5. Add a file under `config/` called tour-of-dogs.config.ts

6. In your tour-of-dogs.config.ts file, add the following with your api key

```typescript
export const config = {
  dogs_api_key: 'your api key',
};
```

Now you can run:

Tour of Heroes: `nx serve` or `nx serve tour-of-heroes`

Tour of Dogs: `nx serve tour-of-dogs`
