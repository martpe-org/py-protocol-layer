from flask_restx import Namespace, Resource

root_namespace = Namespace('root', description='Root Namespace')

@root_namespace.route("/v1/health_check")
class HealthCheck(Resource):

    def get(self):
        return {"status": True}
