var spec = 
{
  "swagger": "2.0",
  "info": {
    "description": "This API Method is used for masking the Aadhaar number",
    "version": "2.0.0",
    "title": "EDO CONNECT",
    "contact": {
      "email": "ops@syntizen.com"
    }
  },
  "host": "edo.syntizen.com",
  "schemes": [
    "https"
  ],
  "paths": {
    "/maskaadhaar": {
      "post": {
        "tags": [
          "Api for masking aadhaar file"
        ],
        "summary": "input as image and output as masked image file",
        "operationId": "0",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Request reference Number",
            "required": true,
            "schema": {
              "$ref": "#/definitions/params"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "success"
          },
          "401": {
            "description": "Invalid Input Image"
          },
          "402": {
            "description": "Image size is not in Supported Range"
          },
          "403": {
            "description": "Request API error"
          },
          "404": {
            "description": "slk is empty"
          },
          "405": {
            "description": "Invalid userid or password"
          },
          "406": {
            "description": "invalid license key",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    }
  },
  "securityDefinitions": {
    "petstore_auth": {
      "type": "oauth2",
      "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
      "flow": "implicit",
      "scopes": {
        "write:pets": "modify pets in your account",
        "read:pets": "read your pets"
      }
    },
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    }
  },
  "definitions": {
    "params": {
      "type": "object",
      "properties": {
        "rrn": {
          "type": "string"
        },
        "slk": {
          "type": "string"
        },
        "uid": {
          "type": "string"
        },
        "env": {
          "type": "string"
        },
        "lon": {
          "type": "string"
        },
        "lat": {
          "type": "string"
        },
        "devid": {
          "type": "string"
        },
        "refr": {
          "type": "string"
        },
        "sertype": {
          "type": "string"
        },
        "aadhaarimage": {
          "type": "string"
        }
      },
      "xml": {
        "name": "User"
      }
    },
    "ApiResponse": {
      "type": "object",
      "properties": {
        "statuscode": {
          "type": "string"
        },
        "statusmsg": {
          "type": "string"
        },
        "txnid": {
          "type": "integer"
        },
        "rrn": {
          "type": "string"
        },
        "refr": {
          "type": "string"
        },
        "maskedImage": {
          "type": "string"
        }
      }
    }
  }
}