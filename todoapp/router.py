from restapi.viewset import TODOViewSet
from rest_framework import routers

router=routers.DefaultRouter()
router.register('todo',TODOViewSet)