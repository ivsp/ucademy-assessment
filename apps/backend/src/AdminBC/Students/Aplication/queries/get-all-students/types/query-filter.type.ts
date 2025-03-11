export type GetAllQueryFilterType = {
  name?: { $regex: string; $options: string };
  lastName?: { $regex: string; $options: string };
  email?: { $regex: string; $options: string };
  phone?: { $regex: string; $options: string };
  page?: number;
  limit?: number;
};
