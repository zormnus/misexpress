import logging
from ..models import User

logger = logging.getLogger(__name__)


class UserService:
    """Бизнес логика для работы с пользователями"""

    @staticmethod
    def get_user_by_username(username: str) -> User:
        return User.objects.get(username=username)

    @staticmethod
    def get_user_by_id(id: int) -> User:
        return User.objects.get(pk=id)
