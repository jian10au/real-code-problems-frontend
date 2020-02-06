{
  "data": {
    "challenge": {
      "id": "d618a0cf-80f5-4368-acda-bd6f8f296ba0",
      "title": "Introduction",
      "description": "an introduction to real code problems",
      "metadata": {
        "readme": "# Real Code Challenge - Introduction\n\nAn introduction to the concepts to Real Code Challenges.\n\nThe Introduction will take you through the process of becoming accustomed to\nthe format of the challenge and assciated tests. In no time you will be solving\nBDD (Behaviour Driven Development) test cases to develop a working web app.\n\nThis will include:\n\n- providing a text based answer\n- running the test cases locally\n_comming soon:_\n  - getting accustomed to page fragments and identifying parts of the working\n    app using `data-testid`'s\n  - submitting a hosted solution using a URL\n  - submitting a fully standalone ZIP of a working solution\n  - more advanced work to predefine state of data in your solution\n\n## Test cases\n\n1. [Feature 01 get some static text on a web page](./features/feature_01_get_some_static_text_on_a_web_page.feature)\n\n## Running\n\nonce downloaded locally run it locally against a solution\n\n``` sh\nENTRY_POINT=solutions/index_5.html make build\n```\n\nor run using docker-compose\n``` sh\nENTRY_POINT=solutions/index_5.html docker-compose up\n# OR\nENTRY_POINT=solutions/index_5.html docker-compose run --rm features\n# OR\ndocker-compose run --rm -e ENTRY_POINT=solutions/index_5.html features\n```\n\n",
        "metadata": [
          {
            "id": "get-started-with-web-app-testing-some-basic-html",
            "uri": "features/feature_01_get_some_static_text_on_a_web_page.feature",
            "line": "1",
            "name": "Get started with web app testing some basic HTML",
            "keyword": "Feature",
            "description": "",
            "elements": [
              {
                "id": "get-started-with-web-app-testing-some-basic-html;get-some-text-on-a-page",
                "line": "3",
                "name": "Get some text on a page",
                "keyword": "Scenario",
                "description": "",
                "steps": [
                  {
                    "line": "4",
                    "name": "a static file",
                    "keyword": "Given ",
                    "hints": [
                      "pass a static fail via the \"ENTRY_POINT\" environment variable as in\n\nENTRY_POINT=path/to/my/file docker-compose up"
                    ],
                    "helperImages": []
                  },
                  {
                    "line": "6",
                    "name": "it has some pieces of text on the page",
                    "keyword": "Then ",
                    "hints": [],
                    "helperImages": []
                  }
                ]
              },
              {
                "id": "get-started-with-web-app-testing-some-basic-html;put-the-text-in-appropriate-tags-`h1`-and-a-`p`-tag",
                "line": "11",
                "name": "Put the text in appropriate tags `h1` and a `p` tag",
                "keyword": "Scenario",
                "description": "",
                "steps": [
                  {
                    "line": "12",
                    "name": "a static file",
                    "keyword": "Given ",
                    "hints": [
                      "pass a static fail via the \"ENTRY_POINT\" environment variable as in\n\nENTRY_POINT=path/to/my/file docker-compose up"
                    ],
                    "helperImages": []
                  },
                  {
                    "line": "14",
                    "name": "it has a \"h1\" with the text \"Welcome to Real Code Problems\"",
                    "keyword": "Then ",
                    "hints": [
                      "need a \"h1\" html tag as in\n\n<h1>Welcome to Real Code Problems</h1>"
                    ],
                    "helperImages": [
                      "helper_images/feature_01_heading.png"
                    ]
                  },
                  {
                    "line": "15",
                    "name": "the following elements with text",
                    "keyword": "And ",
                    "hints": [
                      "need a \"h1\" html tag as in\n\n<h1>Welcome to Real Code Problems</h1>",
                      "need a \"p\" html tag as in\n\n<p>Real code problems help you learn how to code while solving real problems.</p>"
                    ],
                    "helperImages": [
                      "helper_images/feature_01_heading.png",
                      "helper_images/feature_01_paragraph.png"
                    ]
                  }
                ]
              },
              {
                "id": "get-started-with-web-app-testing-some-basic-html;scope-text-behind-page-fragmets-identified-by-data-testid's",
                "line": "20",
                "name": "Scope text behind page fragmets identified by data-testid's",
                "keyword": "Scenario",
                "description": "",
                "steps": [
                  {
                    "line": "21",
                    "name": "a static file",
                    "keyword": "Given ",
                    "hints": [
                      "pass a static fail via the \"ENTRY_POINT\" environment variable as in\n\nENTRY_POINT=path/to/my/file docker-compose up"
                    ],
                    "helperImages": []
                  },
                  {
                    "line": "23",
                    "name": "it has a \"h1\" with the text \"Welcome to Real Code Problems\"",
                    "keyword": "Then ",
                    "hints": null,
                    "helperImages": null
                  },
                  {
                    "line": "24",
                    "name": "the following elements with text",
                    "keyword": "And ",
                    "hints": [],
                    "helperImages": []
                  }
                ]
              }
            ]
          }
        ]
      },
      "features": [
        {
          "title": "Feature: Get started with web app testing some basic HTML",
          "text": "Feature: Get started with web app testing some basic HTML\n\n  Scenario: Get some text on a page\n    Given a static file\n\n    Then it has some pieces of text on the page\n      | text                                                                       |\n      | Welcome to Real Code Problems                                              |\n      | Real code problems help you learn how to code while solving real problems. |\n\n  Scenario: Put the text in appropriate tags `h1` and a `p` tag\n    Given a static file\n\n    Then it has a \"h1\" with the text \"Welcome to Real Code Problems\"\n    And the following elements with text\n      | tag | text                                                                       |\n      | h1  | Welcome to Real Code Problems                                              |\n      | p   | Real code problems help you learn how to code while solving real problems. |\n\n  Scenario: Scope text behind page fragmets identified by data-testid's\n    Given a static file\n\n    Then it has a \"h1\" with the text \"Welcome to Real Code Problems\"\n    And the following elements with text\n      | fragment    | text                                                                       |\n      | heading     | Welcome to Real Code Problems                                              |\n      | sub-heading | Real code problems help you learn how to code while solving real problems. |\n      | quote-1     | Real code problems are problems solved with web apps.                      |\n      | quote-2     | Real code problems will help you build out BDD phrasing of problems.       |\n\n"
        }
      ],
      "featureFileUrls": [
        {
          "filename": "introduction-features-feature_01_get_some_static_text_on_a_web_page.feature",
          "url": "https://stg-real-code-runner.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d8cf5963302dba8ede154afff8b54bff8586d4d6/introduction-features-feature_01_get_some_static_text_on_a_web_page.feature"
        }
      ],
      "helperImageUrls": [
        {
          "filename": "introduction-helper_images-feature_01_heading.png",
          "url": "https://stg-real-code-runner.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6c03d570c51cfb82441662c7e903127e8a6eb7f5/introduction-helper_images-feature_01_heading.png"
        },
        {
          "filename": "introduction-helper_images-feature_01_paragraph.png",
          "url": "https://stg-real-code-runner.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBLQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a658e096eec96a17102efba7f49b2af145cebba/introduction-helper_images-feature_01_paragraph.png"
        }
      ]
    }
  }
}