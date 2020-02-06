import wait from '../utils/wait.js'
import Axios from 'axios'

const allTestLines = [
    {
        testString: `And follows "New Article"                `,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/01_and_follows_new_article.jpg",
        lineNumber: 8
    },
    {
        testString: `Then she sees a "New Article" form`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/02_then_she_sees_a_new_article_form.jpg",
        lineNumber: 10
    },
    {
        testString: `When she fills in the feilds`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/03_when_she_fills_in_the_fields.jpg",
        lineNumber: 12
    },
    {
        testString: `Then "she" sees success message "Article was successfully created."`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/04_then_she_sees_success_message_article_was_successfully_created.jpg",
        lineNumber: 12
    },
    {
        testString: `And "she" sees the article with the content`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/05_and_she_sees_the_article_with_the_content.jpg",
        lineNumber: 18
    },
    {
        testString: `When "John" comments "Well done"`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/06_when_john_comments_well_done.jpg",
        lineNumber: 13
    },
    {
        testString: `Then "he" sees success message "Comment was successfully created."`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/07_then_he_sees_success_message_comment_was_successfully_created.jpg",
        lineNumber: 15
    }
];

export const allFeatures = [
    {
        title: "Can create blog posts",
        number: 1,
        scenarios: [
            {
                scenarioTitle: "Jane goes to the site and creates a blog post",
                lineNumbers: [allTestLines[0], allTestLines[1], allTestLines[2], allTestLines[3], allTestLines[4]]
            }
        ]
    },
    {
        title: "Can comment on blog posts",
        number: 2,
        scenarios: [
            {
                scenarioTitle: "John and James comment on Jane's blog post",
                lineNumbers: [allTestLines[5]._id, allTestLines[6]._id]
            }
        ]
    }
];

// Will use /challenges/:id/features backend route
export const getFeatures = async (challengeID) => {
    console.log('inside get features API call')
    let apiCall = await Axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/challenges/${challengeID}/features`)
    let features = JSON.parse(apiCall.request.response)
    console.log("FEATURES HERE")
    console.log(features.features)
    return features.features
}

