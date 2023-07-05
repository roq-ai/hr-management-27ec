import { CustomerInterface } from 'interfaces/customer';
import { HrManagerInterface } from 'interfaces/hr-manager';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  customer: CustomerInterface[];
  hr_manager: HrManagerInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
