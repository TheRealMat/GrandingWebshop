using GrandingWebshop.Models;
using Microsoft.JSInterop;
using System.Diagnostics;

namespace GrandingWebshop
{
    public class javaScriptInterface
    {
        private readonly IJSRuntime jsRuntime;

        public javaScriptInterface(IJSRuntime jsRuntime)
        {
            this.jsRuntime = jsRuntime;
        }

        public async Task<ProductModel[]> Call_JS_GetProducts_Async(string message)
        {
            Console.WriteLine("Debug 2");
            Console.WriteLine(message);
            var javaScriptInterfaceWrapper = await this.jsRuntime.InvokeAsync<IJSObjectReference>("import", "./Db_Test.js");
            var data = await javaScriptInterfaceWrapper.InvokeAsync<ProductModel[]>("JS_Get_Products", 10000, message);
            Console.WriteLine("Debug 3");
            return data;
        }

        public async Task<ProductModel[]> Call_JS_GetProducts_Functions_Async(string message)
        {
            Console.WriteLine("Debug 2");
            Console.WriteLine(message);
            var javaScriptInterfaceWrapper = await this.jsRuntime.InvokeAsync<IJSObjectReference>("import", "./functions/Db_Test_Functions.js");
            var data = await javaScriptInterfaceWrapper.InvokeAsync<ProductModel[]>("JS_Get_Products_Functions", 10000, message);
            Console.WriteLine("Debug 3");
            return data;
        }
    }
}
