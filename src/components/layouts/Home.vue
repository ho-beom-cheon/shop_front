<template>
  <div class="home">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div
            v-for="product in products"
            :key="product.id"
            class="col">
            <div class="card shadow-sm">
              <img
                :src="product.image"
                alt="product.name"
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"/>
              <div class="card-body">
                <p class="card-text">{{ product.name }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <router-link
                      :to="{ name: 'product', params: { id: product.id } }"
                      class="btn btn-sm btn-outline-secondary">
                      View
                    </router-link>
                    <button
                      @click="addToCart(product)"
                      class="btn btn-sm btn-outline-secondary">
                      Add to cart
                    </button>
                  <small class="text-muted  fw-bold">{{ product.price }}원</small>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
