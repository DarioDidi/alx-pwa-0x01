## API overview
    Collection of information for movies, tv-shows, actors.
    Includes youtube trailer url, awards, full biography, and many other usefull informations. 
    This api provides complete and updated data for over 9 million titles ( movies, series and episodes)
    and 11 million actors / crew and cast members. 


## API Version
    v1


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
    Requests Do Not require any authentication
    Authorization: No additional authorizations needed

## Error Handling 
    example: 
    path: GET https://moviesdatabase.p.rapidapi.com/titles/
    message	"Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info."
    Handling: Console log error message

    example 2: 
    PATH https://moviesdatabase.p.rapidapi.com/titles/%7Bid%7
    Response: 400 Bad Request
    Handling: log "{id} NOT found"


    

## Usage Limits and Best Practices
    Use Parameters
    - limit: NUMBER
        default: 10
        description: number of objects per page (max 50)

    - exact: STRING
        default : false
        description: set the lookup to match the exact text, available only in Search - Titles by Title

    - genre STRING  
        when searching for genres
        filter by genre of title, case sensitive - has to be capitalize, options for this field from /title/utils/genres

