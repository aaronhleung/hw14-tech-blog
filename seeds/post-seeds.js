const { Post } = require('../models');

const postData = [
    {
        title: "Is technology spying on you? New AI could prevent eavesdropping",
        post_content: "Big Brother is listening. Companies use “bossware” to listen to their employees when they’re near their computers. Multiple “spyware” apps can record phone calls. And home devices such as Amazon’s Echo can record everyday conversations. A new technology, called Neural Voice Camouflage, now offers a defense. It generates custom audio noise in the background as you talk, confusing the artificial intelligence (AI) that transcribes our recorded voices.",
        user_id: 3
    },
    {
        title: "iPhone 14 launch date — there's good news for Apple's new iPhones",
        post_content: "The official iPhone 14 release date remains a mystery. But some encouraging news out of Asia suggests that the likely fall launch of Apple's next phone appears to be on track.",
        user_id: 1
    },
    {
        title: "Russia keeps getting hacked.",
        post_content: "Russia — a nation that has famously been on the offensive when it comes to cyber attacks — is now facing its own barrage of hacks as multiple sanctions hit the country from the West.",
        user_id: 2

    },
    {
        title: "Tech Experts Urge Congress to Fight Crypto Influence",
        post_content: "A group of technology experts is trying to warn the government of the dangers of the crypto industry. In a letter to U.S. policy makers, 26 computer scientists and engineers called on lawmakers to block efforts to create a ‘regulatory safe haven’ for cryptocurrency. They want leaders in Washington to instead focus on what they’re calling ‘responsible fintech policy.’",
        user_id: 5
    },
    {
        title: "Elon makes bid on Twitter?!",
        post_content: "Elon Musk's Twitter takeover may help change stock market rules.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;