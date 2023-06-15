function changeBackgroundColor(event){
    var color = event.value;
    document.getElementById('gallery').style.backgroundColor=color;
}
function changeTextColor(event){
    var color = event.value;
    document.getElementById('gallery').style.webkitTextFillColor=color;
}
function img1() {
    var newContent = `<h2>GUERNICA</h2>
    <img src="images/image1.jpg" alt="Guernica" id="displayedImage">
    <div class="desc" id="desc" >

    Pablo Picasso took on an assignment exactly eighty years ago that would forever impact both his career and the face of modern art. 
    In June of 1937, the Cubist painter painted the famous Guernica picture. 
    Its title refers to the same-named city, which was bombarded by Nazi planes during the Spanish Civil War, destroying three-quarters of the ancient town and killing and injuring hundreds of residents.<br><br> 
    Picasso's Guernica depicted the horrors of war to their utmost and has become an international anti-war icon as a result of its uncompromising severity and accentuated by the artist's trademark visual style. <br><br>
    Many art experts consider Guernica, a mural-sized oil painting, to be one of the most dramatic and powerful anti-war artworks in history. 
    The mural, which is 3.49 meters (11 feet 5 inches) tall and 7.76 meters (25 feet 6 inches) broad, depicts the sorrow of individuals who have been torn apart by violence and turmoil. 
    While several of Picasso's works have been hailed as masterpieces, such as Les Demoiselles d'Avignon (1907), which essentially launched Western abstract painting, Guernica stands alone in the artist's illustrious career.

    </div>
    <div id="gobackIcon" onclick="goBack()">Go Back</div>`
    document.getElementById('gallery').innerHTML = newContent
}

function img2() {
    var newContent = `<h2>THE STARRY NIGHT</h2>
    <img src="images/image2.jpg" alt="The Starry Night" id="displayedImage">
    <div class="desc" id="desc">

    Starry Night was painted by Van Gogh about thirteen months before his death in 1889. 
    He was in an institution in Saint-Remy, France, at the time, and his conduct was particularly unpredictable owing to his violent attacks. 
    The scene from his asylum room window is thought to be shown in Starry Night.<br><br> 
    'We may succeed in producing a more fascinating and soothing nature than we can detect with a single sight of reality,' Van Gogh stated, 
    expressing his intention to paint a canvas from imagination, believing that this would add more value to the painting. 
    The artist described the motif as "a starry night with cypresses or maybe above a field of ripe wheat" in a letter to his brother Theo. 
    Van Gogh's aim to paint from memory was realized in Starry Night, which may explain why it has a stronger emotional effect than other works he created at the period.<br><br>
    The night sky in Van Gogh's painting is overflowing with vitality, which contrasts with the quiet town below. 
    In Starry Night, he displays a village that he created, and the church spire reminds him of his country, the Netherlands.<br><br>
    In the left foreground, Van Gogh incorporates a cypress tree, which is commonly seen in cemeteries and is connected with melancholy. 
    This tree connects earth and sky, which may symbolize the artist's personal beliefs on mortality, namely that death is the last goal of life's journey. 
    Van Gogh's persistent concern with death and the hereafter appears to be reflected in Starry Night.<br><br>
    With Starry Night, van Gogh abandons the typical Impressionist relationship with nature in favor of a sense of impatience. 
    His whirling brush strokes create the idea that this picture is always in motion, and his palette is far more bright than in previous works. 
    It is said that van Gogh was the first artist to paint these midnight views firsthand, and that in order to do so, he used to tie lights around his hat to see. 
    Van Gogh is also said to have worked on the Starry Night painting for three nights, and his attitude was that the night was more alive than the day.<br><br>
    Because van Gogh was in an institution at the time he painted Starry Night, doubts regarding his mental state have arisen, leaving Starry Night open to interpretation in terms of meaning and importance. 
    Van Gogh's desire to aid the needy and his former religious commitment are mentioned in one narrative. 
    The eleven visible stars are said to be tied to a chapter from Genesis, and the church spire is said to be linked to the text. 
    This picture, on the other hand, was a chance for van Gogh to prove his ability as an artist by competing with the work of painters such as Gauguin and Bernard.<br><br>
    With its distinct style, Starry Night is a well-known picture that has inspired poetry, fiction, and music, notably Don McLean's renowned song "Vincent" or "Starry, Starry Night." 
    The painting is now housed in New York City's Museum of Modern Art (MoMA).
    
    </div>
    <div id="gobackIcon" onclick="goBack()">Go Back</div>`
    document.getElementById('gallery').innerHTML = newContent
}

function img3() {
    var newContent = `<h2>GIRL WITH A PEARL EARRING</h2>
    <img src="images/image3.jpg" alt="Girl with a Pearl Earring" id='displayedImage'>
    <div class="desc" id="desc">
        
    Vermeer's Girl with a Pearl Earring is a dazzling study of a female head that has been dubbed the Dutch Mona Lisa due to the mysterious look of its main subject. 
    The painting's major focus point is a pearl earring, which is generally regarded for its excellent depiction of light and shadow interplay.<br><br>
    Girl With a Pearl Earring tells the story of Griet, a 16-year-old Dutch girl, becomes a maid at the house of the painter Johannes Vermeer. 
    Her calm and insightful demeanor not only aids her in her domestic responsibilities, but also draws the attention of the painter. 
    Despite their differences in upbringing, education, and social status, they have a similar outlook on life. 
    Slowly, Vermeer brings her into the world of his paintings, which feature quiet, bright pictures of lone women in home situations.<br><br>
    Griet must find a place for herself in a chaotic Catholic family governed by Vermeer's turbulent wife Catharina, his astute mother-in-law Maria Thins, and their passionately loyal maid Tanneke, in contrast to her work in her master's studio. 
    Cornelia, a cheeky six-year-old who sees more than she should, leads the home of six children (and counting).<br><br>
    Griet, who is on the point of becoming a woman, is also dealing with the mounting attentions of a local butcher and Vermeer's patron, the affluent van Ruijven. 
    And she has to navigate this weird new world outside of the beloved Protestant family she grew up in, which has been shattered by accident and death.<br><br>
    As Griet becomes more involved in her master's job, their developing connection causes discord and jealously inside the orderly family, as well as waves in the wider world as the scandal spreads.

    </div>
    <div id="gobackIcon" onclick="goBack()">Go Back</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function img4() {
    var newContent = `<h2>OPHELIA</h2>
    <img src="images/image4.jpg" alt="Ophelia" id="displayedImage"> 
    <div class="desc" id="desc">

    Sir John Everett Millais painted Ophelia in two different places in 1851 and 1852. 
    It's one of the most well-known Pre-Raphaelite paintings in the Tate's collection. 
    The picture was given to Henry Tate in 1894 as part of the original Henry Tate Gift. 
    One of the most well-known pictures from Shakespeare's play Hamlet is Millais' depiction of Ophelia's terrible demise as she falls into the water and drowns.<br><br>
    Ophelia is a character in William Shakespeare's Hamlet. 
    When her father, Polonius, is murdered by her lover, Hamlet, she becomes insane. 
    She passes away when still very young, afflicted by sadness and insanity. The events depicted in Millais' Ophelia do not occur on stage. 
    In a dialogue between Queen Gertrude and Ophelia's brother Laertes, they are instead mentioned. 
    Ophelia went into the river while collecting flowers and slowly perished while singing, according to Gertrude.

    </div>
    <div id="gobackIcon" onclick="goBack()">Go Back</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function img5() {
    var newContent = `<h2>NIGHTHAWKS</h2>
    <img src="images/image5.jpg" alt="Nighthawks" id="displayedImage">
    <div class="desc" id="desc">
    
    'Nighthawks,' by Edward Hopper, is widely regarded as one of America's most renowned paintings of the twentieth century. 
    The picture shows a late-night scene inside the 'Phillies' cafe, with four unknown figures: two men, one lady, and a bartender. 
    'Nighthawks' is sometimes seen as a modern-day investigation of human existentialism and loneliness. 
    The viewer's actual distance from the inside scenario, which is divided by a bending glass façade with no visible entry, reflects the characters' sense of distance and alienation from one another. 
    "Unconsciously, possibly, I was painting the loneliness of a huge metropolis," Hopper claimed of the picture, despite the fact that it does not particularly tackle loneliness.<br><br>
    According to Hopper's wife (Josephine), "Nighthawks" was completed in January 1942 and promptly sold to the Art Institute of Chicago, where it is still on display today. 
    It was painted immediately before the attack of Pearl Harbour, when the prospect of being bombed in New York was extremely real. 
    As a result, the picture is seen as a depiction of wartime estrangement. The painting's bright light is generated by fluorescent lamps in the cafe that leak out into the nighttime street. 
    In the 1940s, fluorescent aughts were becoming increasingly fashionable, thus this vista would have appeared to be rather contemporary. The painting's green tones add to the work's eerie look.
    Other people have hypothesized about the painting's inspirations, including Gail Levin, Hopper's biographer.
    Hopper was inspired by Vincent van Gogh's 'Café Terrace at Night,' which was shown in New York in January 1942 and which Hopper very probably saw.
    
    </div>
    <div id="gobackIcon" onclick="goBack()">Go Back</div>`
    document.getElementById('gallery').innerHTML = newContent
}
function goBack(){
var galleryContent =
`<div id="img1" class="thumbnail" onclick="img1()">
    <img src="images/image1.jpg" alt="Guernica" class="thumbnailImage">
    <div class="thumbnailName">
        Guernica <br> <br>
        <div class="hidden">--Click to see the story--</div>
    </div>
</div>
<div id="img2" class="thumbnail" onclick="img2()">
    <img src="images/image2.jpg" alt="The Starry Night" class="thumbnailImage" >
    <div class="thumbnailName">
        The Starry Night <br> <br>
        <div class="hidden">--Click to see the story--</div>
    </div>
</div>
<div id="img3" class="thumbnail" onclick="img3()">
    <img src="images/image3.jpg" alt="Girl with a Pearl Earring" class="thumbnailImage" >
    <div class="thumbnailName">
        Girl with a Pearl Earring <br> <br>
        <div class="hidden">--Click to see the story--</div>
    </div>
</div>
<div id="img4" class="thumbnail" onclick="img4()">
    <img src="images/image4.jpg" alt="Ophelia" class="thumbnailImage" >
    <div class="thumbnailName">
        Ophelia <br> <br>
        <div class="hidden">--Click to see the story--</div>
    </div>
</div>
<div id="img5" class="thumbnail" onclick="img5()">
    <img src="images/image5.jpg" alt="Nighthawks" class="thumbnailImage" >
    <div class="thumbnailName">
        Nighthawks <br> <br>
        <div class="hidden">--Click to see the story--</div>
    </div>
</div>`

document.getElementById("gallery").innerHTML = galleryContent;
}


