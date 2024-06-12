<script lang="ts">
    export let chapters;
</script>

<h1 class="text-2xl pb-2">Brian's Origin Story</h1>
{#each chapters as chapter }
    <h2>{chapter.title}</h2>
    <p>{chapter.story}</p>
{/each}
<!-- <p>
    Brian grew up in a semi-rural town in Ohio.  As a small boy, he was introduced to video games with his first Nintendo Entertainment System, he was quite hooked.  Soon, he went off to school and found that he was able to grasp complex subjects like Math and Science with ease.  His cousin once introduced him to a Comodore 64, with it's ability to play Atari games, and perform rudamentary programming when connected to a television.  Little did he know that this would spark his future as a Full-Stack Software Engineer.
</p>
<p class="mt-5">
    Brian eventually finished high school and decided to pursue a Computer Engineering degree from The University of Akron.  During his studies, he found that the Software side of computers was much more interesting to him, and so he added on a Minor in Computer Science to his course of study.  He was able to complete this degree in 5 years, including several semesters of internship and part-time work for Software companies like Diebold.
</p>
<p class="mt-5">
    His career path had begun...
</p> -->