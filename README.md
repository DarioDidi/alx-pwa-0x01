#  MoviesDatabase API documentation

### HOSTED AT:
[Movie_app](https://alx-pwa-0x01-pied.vercel.app/)

## API overview
    Collection of information for movies, tv-shows, actors.
    Includes youtube trailer url, awards, full biography, and many other usefull informations. 
    This api provides complete and updated data for over 9 million titles ( movies, series and episodes)
    and 11 million actors / crew and cast members. 


#### API Version: v1


## Available Endpoints

Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

ALL query parameters are OPTIONAL

    Titles
    Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'
        Titles - Multiple:
            path: /titles
            description: returns array of titles according to filters / sorting query parameters provided
            query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
            model: title
        Titles - By List of Id's:
            path: /x/titles-by-ids
            description: returns array of titles according to array of id's provided
            query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
            model: title
        Title
            path: /titles/{id}
            path parameter (required) : id -> imdb id of title
            description: returns title acording to filters / sorting query parameters provided
            query parameters: info
            model: title
        Title Rating
            path: /titles/{id}/ratings
            path parameter (required) : id -> imdb id of title
            description: returns title rating and votes number
            query parameters: -
            model: rating
        Seasons and Episodes
            path: /titles/series/{id}
            path parameter (required) : id -> imdb id of series
            description: returns array of episodes only with episode id, episode number and season number in ascending order
            query parameters: -
            model: light episode
        Seasons Number
            path: /titles/seasons/{id}
            path parameter (required) : id -> imdb id of series
            description: returns number of seasons for the series (integer)
            query parameters: -
        Episodes Id`s By Series Id and Season
            path: /titles/series/{id}/{season}
            path parameter (required) : id -> imdb id of series, season -> season number
            description: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
            query parameters: -
            model: light episode
        Episode
            path: /titles/episode/{id}
            path parameter (required) : id -> imdb id of episode
            description: returns episode according to filters / sorting query parameters provided
            query parameters: info
            model: title
        Upcoming Titles
            path: /titles/x/upcoming
            description: returns array of upcoming titles according to filters / sorting query parameters provided
            query parameters: multiple
            model: title
    Search
        Titles by Keyword
            path: /titles/search/keyword/{keyword}
            path parameter (required) : keyword
            description: returns array of titles according to filters / sorting query parameters provided and the keyword provided in path
            query parameters: multiple
            model: title
        Titles by Title
            path: /titles/search/title/{title}
            path parameter (required) : title -> a title or part of a title
            description: returns array of titles according to filters / sorting query parameters provided and the title provided in path
            query parameters: *multiple, uniq query parameter exact that sets the looku to be exact default : false
            model: title
        Titles by Aka's
            path: /titles/search/akas/{aka}
            path parameter (required) :aka -> a aka of a title ( exact only and case sensitive )
            description: returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches
            query parameters: multiple
            model: title
    Actors
        Actors
            path: /actors
            description: returns array of actors according to filters provided
            query parameters: limit, page
            model: actor
        Actor By Id
            path: /actors/{id}
            path parameter (required) : imdb id of actor
            description: returns actor details
            model: actor
    Utils
        Title Type
            path: /title/utils/titleType
            description: returs array of title types
        Genres
            path: /title/utils/titleType
            description: returs array of genres
        Titles Lists
            path: /title/utils/lists
            description: returns array of lists (for 'list' query parameter)

## Request and Response Format 
    Example:
    GET /actors/{id}
    description: returns actor details
    example of actor object:
        nconst:"nm0000001",
        primaryName:"Fred Astaire", birthYear:1899 deathYear:1987, 
        primaryProfession:"soundtrack,actor,miscellaneous", 
        knownForTitles:"tt0050419,tt0053137,tt0072308,tt0031983",

## Authentication
    To access the API, you will need to authenticate your requests by including an API key in the request header.
    Please refer to the authentication section in the API documentation for instructions
    on how to generate and include the API key in your requests.

## Error Handling 
 Common HTTP Status Codes

    400 Bad Request: This status is returned when your request is malformed or missing some required parameters. The response body might also include a “message” field, explaining the specific error. Ensure that all required fields are included and properly formatted before retrying your request.

    403 Forbidden: This error indicates that you are not subscribed to the API or that your API key is invalid. If you believe this is in error, please contact RapidAPI support - support@rapidapi.com.

    404 Not Found: This status is returned if the requested resource could not be found. This can occur with incorrect URL endpoints. Double-check the URL and try again.

    429 Too Many Requests: This error means you have hit the rate limit for your subscription plan. Wait until your rate limit resets, or consider upgrading your subscription plan for a higher limit. If you believe this is in error, please contact us.

    5XX Server Error (500, 502, and 503): This indicates a problem with our servers processing your request or an internal server timeout. This is a rare occurrence and should be temporary. If this error persists, please contact our technical support for assistance at    


### Handling
    Retry Logic: For 5XX (500, 502, 503) and 429, implement a retry mechanism that waits for a few seconds before retrying the request.

    Validation: Prior to sending requests, validate parameters to catch common errors like 400 Bad Request.

    Logging: Log error responses for further analysis to understand patterns or recurring issues that might require changes in how you integrate with the API. The request_id field in the response can be used for further debugging.

    User Feedback: When applicable, Provide clear messages to your users when an error occurs, potentially using the information from the error response.

    example: 
    path: GET https://moviesdatabase.p.rapidapi.com/titles/
    message	"Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info."
    Handling: Console log error message

    example 2: 
    PATH https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7
    Response: 400 Bad Request
    Handling: log "{id} NOT found"


    

## Usage Limits and Best Practices
    API rate LIMIT: 1000 requests per hour
    Requests: 500,000 / Month (Hard Limit)

    Perfect for developers, startups, and businesses looking for scalable, reliable, and cost-effective APIs.
    When hitting the rate limits of the API, the gateway will return a 429 Too Many Requests error. 
