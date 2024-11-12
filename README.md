Deploy: https://todododo-haqq694og-alexanderpoltavskys-projects.vercel.app/

- Добавил функционал "карандаша" (editTask);
- Теперь id добавляется через lodash/uniqueId;
- Сократил логику фильтрации до currentFilter - содержащий текущий фильтр;
- Поменял "min + sec" на секунды;
- Убрал в компоненте "new-task-form" стейт "data" за ненадобностью;
- Перенес фильтрацию по "currentFilter" в компонент "Task", фильтрация происходит по свойству "isDone";
