//import axios from "axios";
export {};

const form = document.getElementById("form") as HTMLFormElement;

// when a button with type "submit" is clicked, the form the button is in emits the "submit" event
// the "submit" event does not propagate, it's only on the form element itself

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const formEntries = formData.entries();
	const data = Object.fromEntries(formData.entries()) as Record<
		string,
		string | string[]
	>;

	data["clothes"] = [...formEntries]
		.filter((pair) => pair[0] == "clothes")
		.map((pair) => pair[1]) as string[];

	const user: Record<string, any> = await axios.post(
		"http://0.0.0.0:3000/users",
		data
	);

	console.log(user.data);

	alert(`Successfully registered! Your user id is: ${user.data.id}`);
});

function style_children (parent: HTMLElement, tailwind_class: string) {
    let temp_children = parent.children as HTMLCollection
    for(let i = 0; i < Object.keys(temp_children).length; i ++){
        temp_children[i].classList.add(tailwind_class)
    }
}

style_children(form, "flex")
style_children(form, "flex-col")