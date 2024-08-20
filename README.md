
# UzimaPath
<!-- /api/auth:
post:
    summary: Authenticates a user, returning a JWT
    tags: [Authentication]
    requestBody:
    required: true
    content:
        application/json:
        schema:
            type: object
            properties:
            email:
                type: string
            password:
                type: string
    responses:
    "200":
        description: Return a JWT and a success message
        content:
        application/json:
            schema:
            type: object
            properties:
                token:
                type: string
                message:
                type: string
    "400":
        description: Invalid request
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
get:
    summary: Fetches all goals for the authenticated user
    tags: [Goals]
    responses:
    "200":
        description: Return an array of goals
        content:
        application/json:
            schema:
            type: array
            items:
                $ref: '#/components/schemas/Goal'
    "401":
    description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
/api/goals:
post:
    summary: Creates a new goal
    tags: [Goals]
    requestBody:
    required: true
    content:
        application/json:
        schema:
            $ref: '#/components/schemas/Goal'
    responses:
    "201":
        description: Return a success message
        content:
        application/json:
            schema:
            type: object
            properties:
                message:
                type: string
    "400":
        description: Invalid request
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
get:
    summary: Fetches all goals for the authenticated user
    tags: [Goals]
    responses:
    "200":
        description: Return an array of goals
        content:
        application/json:
            schema:
            type: array
            items:
                $ref: '#/components/schemas/Goal'
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
/api/exercises:
post:
    summary: Creates a new exercise
    tags: [Exercises]
    requestBody:
    required: true
    content:
        application/json:
        schema:
            $ref: '#/components/schemas/Exercise'
    responses:
    "201":
        description: Return a success message
        content:
        application/json:
            schema:
            type: object
            properties:
                message:
                type: string
    "400":
        description: Invalid request
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
get:
    summary: Fetches all exercises for the authenticated user
    tags: [Exercises]
    responses:
    "200":
        description: Return an array of exercises
        content:
        application/json:
            schema:
            type: array
            items:
                $ref: '#/components/schemas/Exercise'
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
/api/progress:
post:
    summary: Creates a new progress report
    tags: [Progress]
    requestBody:
    required: true
    content:
        application/json:
        schema:
            $ref: '#/components/schemas/Progress'
    responses:
    "201":
        description: Return a success message
        content:
        application/json:
            schema:
            type: object
            properties:
                message:
                type: string
    "400":
        description: Invalid request
        content:
        application/json:
            schema:
            type: object
            properties:
            error:
                type: string
    "401":
        description: Invalid credentials
        content:
        application/json:
            schema:
            type: object
            properties:
                error:
                type: string
get:
    summary: Fetches all progress reports for the authenticated user
    tags: [Progress]
    responses:
    "200":
        description: Return an array of progress reports. -->