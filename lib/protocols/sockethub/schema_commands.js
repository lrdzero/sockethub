var schemas = {
  "ping" : {
    "title": "ping",
    "type": "object",
    "properties": {
      "timestamp": {
        "type": "string",
        "required" : true
      }
    }
  },

  "register" : {
    "title": "register",
    "type": "object",
    "properties": {
      "remoteStorage": {
        "type": "object",
        "required": false,
        "properties": {
          "bearerToken": {
            "type": "string",
            "required" : true
          },
          "storageEndpoint": {
            "type": "string",
            "required" : true
          }
        }
      },
      "secret": {
        "type": "string",
        "required": true
      }
    }
  },

  "search" : {
    "title": "search",
    "type": "object",
    "properties": {
      "timestamp": {
        "type": "integer",
        "required" : true
      }
    }
  },

  "message": {
    "title": "message",
    "type": "object",
    "properties": {
      "actor": {
        "type": "object",
        "required": true,
        "properties": {
          "protocol": {
            "type": "string",
            "required": true
          },
          "to": {
            "type": "array",
            "required": true,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          },
          "cc": {
            "type": "array",
            "required": false,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          },
          "bcc": {
            "type": "array",
            "required": false,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          }
        }
      },
      "object": {
        "type": "object",
        "required": true,
        "properties": {
          "headers": {
            "type": "object",
            "required": false
          },
          "subject": {
            "type": "string",
            "required": false
          },
          "body": {
            "type": "string",
            "required": false
          }
        }
      },
      "source": {
        "type": "object",
        "required": true,
        "properties": {
          "protocol": {
            "type": "string",
            "required": true
          },
          "to": {
            "type": "array",
            "required": true,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          },
          "cc": {
            "type": "array",
            "required": false,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          },
          "bcc": {
            "type": "array",
            "required": false,
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "required": false
                },
                "address": {
                  "type": "string",
                  "required": true
                }
              }
            }
          }
        }
      }
    }
  }
};
module.exports = schemas;