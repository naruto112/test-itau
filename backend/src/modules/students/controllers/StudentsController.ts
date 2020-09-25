import { Request, Response } from "express";
import CreateStudentService from "../services/CreateStudentService";
import AuthStudentService from "../services/AuthStudentService";

class StudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createStudentService = new CreateStudentService();

    const { name, register } = request.body;

    const student = await createStudentService.execute({
      name,
      register,
    });

    return response.json(student);
  }

  public async auth(request: Request, response: Response): Promise<Response> {
    const authStudentService = new AuthStudentService();
    const { register } = request.body;

    const student = await authStudentService.execute({
      register,
    });

    return response.json(student);
  }
}

export default StudentsController;
