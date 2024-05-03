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
          hooks: {
            'hook-alert': {
              '@apply rounded-lg border border-red-500 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-fit flex items-center gap-4 justify-between': {}
            },
            'hook-close': {
              position: 'relative',
              top: 0,
              right: 0
            }
          }
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