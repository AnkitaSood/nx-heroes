## Nx workspace + Angular + Storybook

To do:

(Add description)

### Steps to run locally

1. Clone the repo

2. From inside of the project directory, run `npm i` to install dependencies

3. Install Nx globally with `npm i -g nx`

At this point, you can run the Tour of Heroes app with `nx serve`. If you want to run Tour of Dogs, some additional setup is required.

4. Go to [thedogapi.com/signup](https://thedogapi.com/signup) and register for an API key.

5. Add a file under `config/` called tod-config.ts

6. In your tod-config.ts file, add the following with your api key

```typescript
// TODO: woudn't use aliased import for some reason
import { TourOfDogsConfig } from '../libs/tour-of-dogs/tod-models/src/index';

export const tourOfDogsConfig: TourOfDogsConfig = {
  baseUrl: 'https://api.thedogapi.com',
  apiKey: 'your api key'
}
```

Now you can run:

Tour of Heroes: `nx serve` or `nx serve tour-of-heroes`

Tour of Dogs: `nx serve tour-of-dogs`
