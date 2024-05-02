import preset from "franken-ui/shadcn-ui/preset";
import variables from "franken-ui/shadcn-ui/variables";
import ui from "franken-ui";
import hooks from "franken-ui/shadcn-ui/hooks";

const shadcn = hooks({ theme: 'green' });

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  presets: [preset],
  plugins: [
    variables({ theme: 'green' }),
    ui({
      components: {
        alert: {
          hooks: shadcn.alert
        },
        card: {
          hooks: shadcn.card
        },
        'form-range': {
          hooks: shadcn["form-range"]
        },
        form: {
          hooks: shadcn.form,
          media: true
        },
        button: {
          hooks: shadcn.button
        }
      }
    }),
  ],
};