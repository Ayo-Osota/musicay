<template>
  <main class="bg-mainBg grid grid-rows-[73px_1fr] gap-y-6 min-h-full max-md:px-6 md:pr-15 pb-15">
    <panel-top class="sticky top-0 bg-mainBg" />

    <div class="grid grid-flow-col md:grid-cols-[96px_1fr]">
      <!-- Navigation -->
      <side-nav />

      <!-- Main Body -->
      <section class="col-start-2">
        <slot></slot>
      </section>
    </div>
  </main>
</template>