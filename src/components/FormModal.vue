<template>
  <div class="modal" id="FormModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close btn-outline-success"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="#" method="POST">
            <br />

            <div class="text-center">
              <button
                type="submit"
                class="btn btn-outline-success me-1"
              >
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "FormModal",

  data() {
    return {
      erroLogin: false,
    };
  },
};
</script>

<style>
</style>