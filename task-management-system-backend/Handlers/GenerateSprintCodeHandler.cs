namespace task_management_system_backend.Handlers
{
    public class GenerateSprintCodeHandler
    {
        public static string GenerateCode(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return string.Empty;

            string[] words = name.Split(' ', StringSplitOptions.RemoveEmptyEntries);

            // Get the first letter of each word and convert to uppercase
            string code = string.Join("", words.Select(w =>
                !string.IsNullOrEmpty(w) ? char.ToUpper(w[0]).ToString() : ""));

            return code;
        }
    }
}
