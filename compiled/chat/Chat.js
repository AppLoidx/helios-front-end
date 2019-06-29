class Chat extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ "class": "jumbotron m-0 p-0 bg-transparent" },
			React.createElement(
				"div",
				{ "class": "row m-0 p-0 position-relative" },
				React.createElement(
					"div",
					{ "class": "col-12 p-0 m-0 position-absolute", style: { right: "0p" } },
					React.createElement(
						"div",
						{ "class": "card border-0 rounded", style: "{box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01); overflow: hidden; height: 100vh;" },
						React.createElement(
							"div",
							{ "class": "card-header p-1 bg-light border border-top-0 border-left-0 border-right-0", style: "color: rgba(96, 125, 139,1.0);" },
							React.createElement("img", { "class": "rounded float-left", style: "width: 50px; height: 50px;", src: "https://i.pinimg.com/736x/5c/24/69/5c24695df36eee73abfbdd8274085ecd--cute-anime-guys-anime-boys.jpg" }),
							React.createElement(
								"h6",
								{ "class": "float-left", style: "margin: 0px; margin-left: 10px;" },
								" Yusuf Bulgurcu ",
								React.createElement("i", { "class": "fa fa-check text-primary", title: "Onaylanm\u0131\u015F Hesap!", "aria-hidden": "true" }),
								" ",
								React.createElement("br", null),
								React.createElement(
									"small",
									null,
									" \u0130stanbul, TR "
								)
							),
							React.createElement(
								"div",
								{ "class": "dropdown show" },
								React.createElement(
									"a",
									{ id: "dropdownMenuLink", "data-toggle": "dropdown", "class": "btn btn-sm float-right text-secondary", role: "button" },
									React.createElement(
										"h5",
										null,
										React.createElement("i", { "class": "fa fa-ellipsis-h", title: "Ayarlar!", "aria-hidden": "true" }),
										"\xA0"
									)
								),
								React.createElement(
									"div",
									{ "class": "dropdown-menu dropdown-menu-right border p-0", "aria-labelledby": "dropdownMenuLink" },
									React.createElement(
										"a",
										{ "class": "dropdown-item p-2 text-secondary", href: "#" },
										" ",
										React.createElement("i", { "class": "fa fa-user m-1", "aria-hidden": "true" }),
										" Profile "
									),
									React.createElement("hr", { "class": "my-1" }),
									React.createElement(
										"a",
										{ "class": "dropdown-item p-2 text-secondary", href: "#" },
										" ",
										React.createElement("i", { "class": "fa fa-trash m-1", "aria-hidden": "true" }),
										" Delete "
									)
								)
							)
						),
						React.createElement(
							"div",
							{ "class": "card bg-sohbet border-0 m-0 p-0", style: "height: 100vh;" },
							React.createElement(
								"div",
								{ id: "sohbet", "class": "card border-0 m-0 p-0 position-relative bg-transparent", style: "overflow-y: auto; height: 100vh;" },
								React.createElement(
									"div",
									{ "class": "balon1 p-2 m-0 position-relative", "data-is": "You - 3:20 pm" },
									React.createElement(
										"a",
										{ "class": "float-right" },
										" Hey there! What's up? "
									)
								),
								React.createElement(
									"div",
									{ "class": "balon2 p-2 m-0 position-relative", "data-is": "Yusuf - 3:22 pm" },
									React.createElement(
										"a",
										{ "class": "float-left sohbet2" },
										" Checking out iOS7 you know.. "
									)
								),
								React.createElement(
									"div",
									{ "class": "balon1 p-2 m-0 position-relative", "data-is": "You - 3:23 pm" },
									React.createElement(
										"a",
										{ "class": "float-right" },
										" Check out this bubble! "
									)
								),
								React.createElement(
									"div",
									{ "class": "balon2 p-2 m-0 position-relative", "data-is": "Yusuf - 3:26 pm" },
									React.createElement(
										"a",
										{ "class": "float-left sohbet2" },
										" It's pretty cool! "
									)
								),
								React.createElement(
									"div",
									{ "class": "balon1 p-2 m-0 position-relative", "data-is": "You - 3:28 pm" },
									React.createElement(
										"a",
										{ "class": "float-right" },
										" Yeah it's pure CSS & HTML "
									)
								),
								React.createElement(
									"div",
									{ "class": "balon2 p-2 m-0 position-relative", "data-is": "Yusuf - 3:33 pm" },
									React.createElement(
										"a",
										{ "class": "float-left sohbet2" },
										" Wow that's impressive. But what's even more impressive is that this bubble is really high. "
									)
								)
							)
						),
						React.createElement(
							"div",
							{ "class": "w-100 card-footer p-0 bg-light border border-bottom-0 border-left-0 border-right-0" },
							React.createElement(
								"form",
								{ "class": "m-0 p-0", action: "", method: "POST", autocomplete: "off" },
								React.createElement(
									"div",
									{ "class": "row m-0 p-0" },
									React.createElement(
										"div",
										{ "class": "col-9 m-0 p-1" },
										React.createElement("input", { id: "text", "class": "mw-100 border rounded form-control", type: "text", name: "text", title: "Type a message...", placeholder: "Type a message...", required: true })
									),
									React.createElement(
										"div",
										{ "class": "col-3 m-0 p-1" },
										React.createElement(
											"button",
											{ "class": "btn btn-outline-secondary rounded border w-100", title: "G\xF6nder!", style: "padding-right: 16px;" },
											React.createElement("i", { "class": "fa fa-paper-plane", "aria-hidden": "true" })
										)
									)
								)
							)
						)
					)
				)
			)
		);
	}
}