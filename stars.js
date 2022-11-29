export default function stars(numberOfStars = 10, text = "hi"){
    console.log(
`${'*'.repeat(numberOfStars)}
${text}
${'*'.repeat(numberOfStars)}`
);
}