import http from './http-common';
import ITutorialData from './Tutorial';
const update = (id: any, data: ITutorialData) => {
    return http.put<any>(`/students/${id}`, data);
};
const get = (id: any) => {
    return http.get<ITutorialData>(`/students/${id}`);
};

const TutorialService = {

    update,
    get,
};
export default TutorialService;