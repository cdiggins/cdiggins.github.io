# Undocumented 3ds Max SDK - MaxPlus and .NET Assemblies

3ds Max has an [official .NET SDK](https://help.autodesk.com/view/3DSMAX/2019/ENU/?guid=__developer_3ds_max__net_sdk_html) which has some  documentation and examples, but it is only the tip of the iceberg. 

I happen to know that there are quite a few .NET DLLs (aka managed DLLs) that contain various APIs that can be found in the 3ds Max executable directory.

> **Hint**: the 3ds Max executable can be found usually in `%programfiles%\Autodesk\3ds Max 2019`, or you can use the environment variable: `ADSK_3DSMAX_x64_2019`. If you ever forget, like me you can find it by typing in `set` in the command line. You can also type in `%ADSK_3DSMAX_x64_2019%` directly in Windows explorer to navigate to the folder. 

 For example the Max Creation Graph (MCG) is written entirely in .NET. and uses an unsupported .NET version of the MaxPlus API ( `MaxPlusDotNet.dll`) which is a C++ wrapper around the 3ds Max API exposed to Python. 
 
 So while it is undocumented and not supported, we do know the MaxPlus .NET API has being used internally extensively since 3ds Max 2016, and is probably not going away anytime soon (unless the 3ds Max team pulls the plug on MCG, or rewrites it).  

This is not really a secret I am sharing: it is possible to load .NET assemblies programmatically using a number of tools (e.g. the C# Object Browser in Visual Studio) and even using your own code. 

# The .NET Assemblies 

Below is a lightly edited list of all the .NET DLLs found by a simple tool I wrote. You can reference any of these DLLs in a Visual C# project, and view the contents using the Visual Studio Object Browser. 

* C:\Program Files\Autodesk\3ds Max 2019\acdbmgd.dll
* C:\Program Files\Autodesk\3ds Max 2019\acdbmgdbrep.dll
* C:\Program Files\Autodesk\3ds Max 2019\AcMPolygonMGD.dll
* C:\Program Files\Autodesk\3ds Max 2019\AdApplicationFrame.dll
* C:\Program Files\Autodesk\3ds Max 2019\AdWindows.dll
* C:\Program Files\Autodesk\3ds Max 2019\AdWindowsWrapper.dll
* C:\Program Files\Autodesk\3ds Max 2019\AssemblyLoader.dll
* C:\Program Files\Autodesk\3ds Max 2019\atf_converter\qdca64.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Act.Content.DLL
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Act.Core.DLL
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.Explorer.Extensibility.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.Explorer.ExtensibilityTools.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.Extensibility.Framework.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.JobProcessor.Extensibility.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.WebServices.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.WebServices.Interop.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Connectivity.WebServices.WCF.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.DataManagement.Client.Framework.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.DataManagement.Client.Framework.Forms.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.DataManagement.Client.Framework.Vault.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.DataManagement.Client.Framework.Vault.Forms.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Max.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Max.Remoting.dll
* C:\Program Files\Autodesk\3ds Max 2019\Autodesk.Max.SlateSdkWrapper.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\Autodesk.Max.StateSets.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\Autodesk.Max.Wrappers.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\BooleanExplorerView.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\CreaseExplorerView.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\DaylightSimulation.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\FPMaxWpfContent.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\ManagedBootstrap.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\ManagedNetworkUtilities.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\MaterialExplorerView.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\MaxWpfContent.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\ProceduralContentActions.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\SceneExplorerView.dll
* C:\Program Files\Autodesk\3ds Max 2019\bin\assemblies\Sunlight.dll
* C:\Program Files\Autodesk\3ds Max 2019\BulletSharp.dll
* C:\Program Files\Autodesk\3ds Max 2019\CoreManagedUiControls.dll
* C:\Program Files\Autodesk\3ds Max 2019\CSharpUtilities.dll
* C:\Program Files\Autodesk\3ds Max 2019\dcu2dnet67.dll
* C:\Program Files\Autodesk\3ds Max 2019\ExplorerFramework.dll
* C:\Program Files\Autodesk\3ds Max 2019\ExplorerManagement.dll
* C:\Program Files\Autodesk\3ds Max 2019\ExternalPlugins\CS5\Windows\Adobe.AfterFX.dll
* C:\Program Files\Autodesk\3ds Max 2019\ExternalPlugins\CS5\Windows\Autodesk.Plugins.Adobe.AfterFX.SceneIO.dll
* C:\Program Files\Autodesk\3ds Max 2019\Geometry3D.dll
* C:\Program Files\Autodesk\3ds Max 2019\ImmutableArray.dll
* C:\Program Files\Autodesk\3ds Max 2019\Inventor Server\Bin\AutodeskDrive.API.dll
* C:\Program Files\Autodesk\3ds Max 2019\Inventor Server\Bin\ClrAddinLoader.dll
* C:\Program Files\Autodesk\3ds Max 2019\Inventor Server\Bin\dcu2dnet66.dll
* C:\Program Files\Autodesk\3ds Max 2019\Lidgren.Network.dll
* C:\Program Files\Autodesk\3ds Max 2019\ManagedMC3.dll
* C:\Program Files\Autodesk\3ds Max 2019\ManagedOpenVDB.dll
* C:\Program Files\Autodesk\3ds Max 2019\ManagedServices.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxBooleanBindings.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxCreaseBindings.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxCreationGraphEditor.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxCustomControls.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxExplorerBindings.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxMaterialBindings.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxPlusDotNet.dll
* C:\Program Files\Autodesk\3ds Max 2019\MaxSerialization.dll
* C:\Program Files\Autodesk\3ds Max 2019\Microsoft.Expression.Drawing.dll
* C:\Program Files\Autodesk\3ds Max 2019\Microsoft.Expression.Interactions.dll
* C:\Program Files\Autodesk\3ds Max 2019\Microsoft.Web.Services3.dll
* C:\Program Files\Autodesk\3ds Max 2019\MonoGame.Framework.dll
* C:\Program Files\Autodesk\3ds Max 2019\Plugins\Ephere.Data.Conversion.Image.Photoshop.dll
* C:\Program Files\Autodesk\3ds Max 2019\Plugins\Ephere.Gui.dll
* C:\Program Files\Autodesk\3ds Max 2019\Plugins\Ephere.Utilities.dll
* C:\Program Files\Autodesk\3ds Max 2019\Plugins\WeifenLuo.WinFormsUI.Docking.dll
* C:\Program Files\Autodesk\3ds Max 2019\Revit_converter\RevitAssemblyResolver.dll
* C:\Program Files\Autodesk\3ds Max 2019\RevitAPI.dll
* C:\Program Files\Autodesk\3ds Max 2019\RevitAPIIFC.dll
* C:\Program Files\Autodesk\3ds Max 2019\RevitAPIInternal.dll
* C:\Program Files\Autodesk\3ds Max 2019\RevitAPIMacros.dll
* C:\Program Files\Autodesk\3ds Max 2019\RevitNET.dll
* C:\Program Files\Autodesk\3ds Max 2019\SceneExplorer.dll
* C:\Program Files\Autodesk\3ds Max 2019\ShaderDebuggerCLI.dll
* C:\Program Files\Autodesk\3ds Max 2019\ShaderDebuggerUI.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.Direct2D1.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.Direct3D11.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.Direct3D9.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.DXGI.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.MediaFoundation.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.RawInput.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.XAudio2.dll
* C:\Program Files\Autodesk\3ds Max 2019\SharpDX.XInput.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\3am.DSim.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\3am.DVSP.Controls.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\3am.DVSP.Extensions.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Data.12D.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Data.GenIO.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Data.LandXml.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Data.Mx.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Data.Vesper.v4.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Import.12D.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Import.Genio.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Import.LandXml.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\CVE.Import.MX.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\Ignytion.Core.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\(CivilView)\bin\Ignytion.Math.v1.dll
* C:\Program Files\Autodesk\3ds Max 2019\stdplugs\assettracking\ATSVault10.dll
* C:\Program Files\Autodesk\3ds Max 2019\UiViewModels.dll
* C:\Program Files\Autodesk\3ds Max 2019\Viper3dsMaxBridge.dll
* C:\Program Files\Autodesk\3ds Max 2019\ViperEngine.dll
* C:\Program Files\Autodesk\3ds Max 2019\ViperExtension.dll
* C:\Program Files\Autodesk\3ds Max 2019\ViperGeometry3D.dll
* C:\Program Files\Autodesk\3ds Max 2019\WeatherData.dll
* C:\Program Files\Autodesk\3ds Max 2019\WPFCustomControls.dll
* C:\Program Files\Autodesk\3ds Max 2019\WPFToolkit.Design.dll
* C:\Program Files\Autodesk\3ds Max 2019\WPFToolkit.dll
* C:\Program Files\Autodesk\3ds Max 2019\WPFToolkit.VisualStudio.Design.dll

## The Tool

Here is the source code for the tool I wrote for iterating over all DLL files in the 3ds Max directory and outputting whether or not is it a .NET DLL. 

```
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _3dsMaxSamples
{
    public class ReflectOverDlls
    {
        public static void OutputDllInfo(string file)
        {
            try
            {
                var asm = Assembly.ReflectionOnlyLoadFrom(file);
                Console.WriteLine($"File {file}");
            }
            catch (Exception e)
            {
                // This happens when we know that the API is not a .NET API
                //Console.WriteLine(e.Message); 
            }
        }

        public static void OutputTypes(Assembly asm)
        {
            foreach (var t in asm.GetTypes().OrderBy(t => t.FullName))
            {
                var kind = t.IsInterface ? "interface" : "class";
                Console.WriteLine($"  {kind} {t.FullName}");
                foreach (var c in t.GetConstructors())
                    Console.WriteLine($"    constructor {c}");
                foreach (var m in t.GetMethods())
                    Console.WriteLine($"    method {m}");
                foreach (var p in t.GetProperties())
                    Console.WriteLine($"    property {p}");
                foreach (var f in t.GetFields())
                    Console.WriteLine($"    field {f}");
            }
        }

        public static void Main()
        {
            var maxFolder = Environment.GetEnvironmentVariable("ADSK_3DSMAX_x64_2019");
            foreach (var f in Directory.GetFiles(maxFolder, "*.dll", SearchOption.AllDirectories)
                .OrderBy(f => f)
                .AsParallel())
            {
                OutputDllInfo(f);
            }
        }
    }
}
```