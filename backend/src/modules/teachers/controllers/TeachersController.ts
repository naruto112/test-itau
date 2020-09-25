import { Request, Response } from "express";

import CreateTeacherService from "../services/CreateTeacherService";
import ShowTeachersService from "../services/ShowTeachersService";
import UpateTeacherService from "../services/UpdateTeacherService";

class TeachersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createTeacherService = new CreateTeacherService();
    const { name, age, materials } = request.body;

    const teacher = await createTeacherService.execute({
      name,
      age,
      materials,
    });

    return response.json(teacher);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showTeachersService = new ShowTeachersService();

    const teachers = await showTeachersService.execute();

    return response.json(teachers);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateTeacherService = new UpateTeacherService();
    const { id, name, age, materials } = request.body;

    const teacher = await updateTeacherService.execute({
      id,
      name,
      age,
      materials,
    });

    return response.json(teacher);
  }
}

export default TeachersController;
