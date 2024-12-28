<template>
    <a :href="url" class="course-button">
        {{ text }}
    </a>
</template>

<script setup>
defineProps({
    text: String,
    url: String,
});
</script>

<style scoped>
.course-button {
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
    background-color: #9bd5fa;
    border-radius: 0.5rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
}

.course-button:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>