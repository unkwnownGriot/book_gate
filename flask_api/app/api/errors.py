from flask import jsonify
from werkzeug.http import HTTP_STATUS_CODES


def error_response(code_status,message=None):
    payload = {'error': HTTP_STATUS_CODES.get(code_status, 'Unknown error')}
    if message:
        payload['message'] = message
    response = jsonify(payload)
    response.status_code = code_status
    print(response)
    return response





def bad_request(code_status=400,message=''):
    return error_response(code_status=code_status,message=message)