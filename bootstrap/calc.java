class calc {
	public static void main(String[] args)
		{
		if (args.length == 3){
			float x = Float.parseFloat(args[0]);
			
			String operator = args [1];
			float y = Float.parseFloat(args[2]);
			float z = 0;

			switch(operator)
				{
					case "+":
						z = x + y;
						break;
					case "-":
						z = x - y;
						break;
					case "x":
						z = x * y;
						break;
					case "/":
						z = x / y;
						break;
					default:
						System.out.println("Enter Valid operator");
						break;
				}
			System.out.println("Result : " + z);
			}
		else {
		System.out.println("Enter valid equation");
	}

} 
}