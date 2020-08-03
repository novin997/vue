<template>
    <div>
        <b-carousel
            id="carousel-fade"
            fade
            controls
            indicators
            img-width="1024"
            img-height="480"
        >
            <b-carousel-slide
                caption="White Album 2"
                img-src="/assets/White-Album-2.jpg"
            ></b-carousel-slide>
        </b-carousel>    
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    name: "Carousel",
}
</script>