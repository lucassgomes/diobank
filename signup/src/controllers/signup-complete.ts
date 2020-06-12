import signupRepo from "../ports/repos/signup";
import signupNotifier from "../ports/notifiers/signup";

export default async (token: string): Promise<void> => {
  const signup = await signupRepo.getByToken(token);
  await signupRepo.updateStatus(signup, "COMPLETE");
  await signupNotifier.complete(signup);
};
