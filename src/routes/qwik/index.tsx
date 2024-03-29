import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Hello Qwik!</div>
});

export const head: DocumentHead = {
  title: "SKILLPOT",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
